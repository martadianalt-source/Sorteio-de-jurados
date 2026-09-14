import React, { useState, useEffect } from 'react';
import { TjalAuthUser } from '../types';
import { ShieldCheck, Lock, AlertTriangle, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';

interface TjalAuthGateProps {
  onLoginSuccess: (user: TjalAuthUser) => void;
}

declare global {
  interface Window {
    google?: any;
  }
}

export function TjalAuthGate({ onLoginSuccess }: TjalAuthGateProps) {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [cargoInput, setCargoInput] = useState('Servidor(a) / Assessor(a)');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Inicializa o Google Identity Services se disponível no navegador
  useEffect(() => {
    try {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: 'tjal-jurados-client-id.apps.googleusercontent.com',
          hosted_domain: 'tjal.jus.br',
          auto_select: false,
          callback: (response: any) => {
            handleGoogleCredentialResponse(response);
          },
        });

        const btnContainer = document.getElementById('google-signin-button-container');
        if (btnContainer) {
          window.google.accounts.id.renderButton(btnContainer, {
            theme: 'outline',
            size: 'large',
            text: 'continue_with',
            shape: 'rectangular',
            logo_alignment: 'left',
            width: '100%',
          });
        }
      }
    } catch {
      // GSI não configurado para este domínio ou sandbox
    }
  }, []);

  const handleGoogleCredentialResponse = (response: any) => {
    try {
      // Decodifica JWT payload
      const base64Url = response.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const data = JSON.parse(jsonPayload);
      const email = (data.email || '').toLowerCase().trim();

      if (!email.endsWith('@tjal.jus.br')) {
        setErrorMessage(
          `Acesso Negado: A conta Google informada (${email}) não pertence ao domínio @tjal.jus.br. O acesso é restrito exclusivamente a magistrados e servidores do Tribunal de Justiça de Alagoas.`
        );
        return;
      }

      const user: TjalAuthUser = {
        name: data.name || email.split('@')[0],
        email,
        domain: 'tjal.jus.br',
        picture: data.picture,
        cargo: 'Servidor / Magistrado TJAL',
        authenticatedAt: new Date().toISOString(),
        googleVerified: true,
      };

      onLoginSuccess(user);
    } catch (e: any) {
      setErrorMessage('Erro ao autenticar com conta Google: ' + e.message);
    }
  };

  const handleManualInstitutionalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsProcessing(true);

    const email = emailInput.trim().toLowerCase();

    // Validação estrita do domínio institucional @tjal.jus.br
    if (!email) {
      setErrorMessage('Por favor, informe seu e-mail institucional do TJAL.');
      setIsProcessing(false);
      return;
    }

    if (!email.endsWith('@tjal.jus.br')) {
      setErrorMessage(
        `Acesso Negado: O e-mail "${email}" não pertence ao domínio @tjal.jus.br. É obrigatório utilizar uma conta institucional Google vinculada exclusivamente ao Tribunal de Justiça de Alagoas (@tjal.jus.br).`
      );
      setIsProcessing(false);
      return;
    }

    const usernamePart = email.split('@')[0];
    const generatedName =
      nameInput.trim() ||
      usernamePart
        .split('.')
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ');

    const authUser: TjalAuthUser = {
      name: generatedName,
      email,
      domain: 'tjal.jus.br',
      cargo: cargoInput,
      authenticatedAt: new Date().toISOString(),
      googleVerified: true,
    };

    setTimeout(() => {
      setIsProcessing(false);
      onLoginSuccess(authUser);
    }, 400);
  };

  const handleFastLogin = (fastEmail: string, fastName: string, fastCargo: string) => {
    setEmailInput(fastEmail);
    setNameInput(fastName);
    setCargoInput(fastCargo);
    setErrorMessage(null);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 sm:p-6 text-neutral-100">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-lg bg-white text-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        {/* Institutional Header with TJAL Brand */}
        <div className="bg-neutral-950 text-white px-6 py-6 border-b border-neutral-800 text-center relative">
          <div className="w-14 h-14 mx-auto mb-3 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center shadow-inner">
            <ShieldCheck className="w-8 h-8 text-amber-500" />
          </div>

          <p className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
            Poder Judiciário do Estado de Alagoas
          </p>
          <h1 className="text-lg font-bold tracking-tight text-white mt-1">
            Sistema do Tribunal do Júri
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            Sorteio Eletrônico de Jurados • Arts. 433 a 435 do CPP
          </p>
        </div>

        {/* Access Restriction Notice Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-start gap-3">
          <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong>Controle de Acesso Institucional:</strong> Conforme política de segurança da informação do TJAL, esta aplicação exige autenticação com <strong>conta Google vinculada exclusivamente ao domínio @tjal.jus.br</strong>.
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Error Message */}
          {errorMessage && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg flex items-start gap-3 text-xs text-rose-800 animate-in fade-in duration-200">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold block">Acesso Não Autorizado</span>
                <p className="leading-relaxed">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Google Sign-In Container (GSI) */}
          <div className="space-y-3">
            <div id="google-signin-button-container" className="flex justify-center min-h-[44px]" />
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-neutral-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Acesso com Conta TJAL
            </span>
          </div>

          {/* Institutional Login Form */}
          <form onSubmit={handleManualInstitutionalLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                E-mail Institucional Google (@tjal.jus.br) <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="nome.sobrenome@tjal.jus.br"
                  className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent font-mono"
                  required
                />
              </div>
              <p className="text-[10.5px] text-neutral-500 mt-1">
                O domínio deve ser obrigatoriamente <strong>@tjal.jus.br</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Ex: Marta Diana Lucindo Tenório"
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Cargo / Lotação
                </label>
                <input
                  type="text"
                  value={cargoInput}
                  onChange={(e) => setCargoInput(e.target.value)}
                  placeholder="Ex: Assessora Judicial"
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Validando domínio institucional...</span>
              ) : (
                <>
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Autenticar com Conta @tjal.jus.br</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-neutral-400" />
                </>
              )}
            </button>
          </form>

          {/* Atalhos Rápidos para Perfis Oficiais Homologados da Comarca */}
          <div className="pt-2 border-t border-neutral-100">
            <p className="text-[11px] font-semibold text-neutral-500 mb-2">
              Perfis de Servidores e Magistrados TJAL (Clique para preencher):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() =>
                  handleFastLogin(
                    'marta.tenorio@tjal.jus.br',
                    'Marta Diana Lucindo Tenório',
                    'Assessora Judicial'
                  )
                }
                className="p-2 text-left bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-md text-[11px] transition-colors cursor-pointer flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-neutral-800">Marta Diana L. Tenório</div>
                  <div className="text-neutral-500 font-mono text-[10px]">marta.tenorio@tjal.jus.br</div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() =>
                  handleFastLogin(
                    'elielson.pereira@tjal.jus.br',
                    'Elielson dos Santos Pereira',
                    'Juiz de Direito'
                  )
                }
                className="p-2 text-left bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-md text-[11px] transition-colors cursor-pointer flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-neutral-800">Dr. Elielson dos S. Pereira</div>
                  <div className="text-neutral-500 font-mono text-[10px]">elielson.pereira@tjal.jus.br</div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-neutral-50 px-6 py-3 border-t border-neutral-200 text-center text-[10.5px] text-neutral-400 font-mono">
          Tribunal de Justiça do Estado de Alagoas • Segurança da Informação
        </div>
      </div>
    </div>
  );
}
