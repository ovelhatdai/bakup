import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  SunIcon, 
  MoonIcon, 
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const { usuario, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getDashboardTitle = () => {
    switch (usuario?.tipo_usuario) {
      case 'admin_geral':
        return 'Dashboard - Administrador Geral';
      case 'admin_escritorio':
        return 'Dashboard - Administrador do Escritório';
      case 'funcionario':
        return 'Dashboard - Funcionário';
      default:
        return 'Dashboard';
    }
  };

  const getWelcomeMessage = () => {
    const hora = new Date().getHours();
    let saudacao = 'Bom dia';
    
    if (hora >= 12 && hora < 18) {
      saudacao = 'Boa tarde';
    } else if (hora >= 18) {
      saudacao = 'Boa noite';
    }
    
    return `${saudacao}, ${usuario?.nome || 'Usuário'}!`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-soft dark:shadow-dark-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                ADVOGANDODASH
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {usuario?.nome}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {usuario?.tipo_usuario === 'admin_geral' && 'Admin Geral'}
                    {usuario?.tipo_usuario === 'admin_escritorio' && 'Admin Escritório'}
                    {usuario?.tipo_usuario === 'funcionario' && 'Funcionário'}
                  </p>
                </div>
                
                <button
                  onClick={handleSignOut}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Sair"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {getWelcomeMessage()}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {getDashboardTitle()}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ChartBarIcon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Vendas do Mês
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    0
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UsersIcon className="h-8 w-8 text-success-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Clientes Ativos
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    0
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DocumentTextIcon className="h-8 w-8 text-warning-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Processos
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    0
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CogIcon className="h-8 w-8 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Configurações
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    -
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="card p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Sistema em Desenvolvimento
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              O sistema ADVOGANDODASH está sendo desenvolvido. Em breve, você terá acesso a todas as funcionalidades de gestão jurídica.
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Funcionalidades Planejadas
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Gestão de clientes e processos</li>
                  <li>• Sistema de vendas e comissões</li>
                  <li>• Relatórios e dashboards</li>
                  <li>• Gamificação e rankings</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Seu Perfil
                </h4>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p><strong>Nome:</strong> {usuario?.nome}</p>
                  <p><strong>Email:</strong> {usuario?.email}</p>
                  <p><strong>Tipo:</strong> {usuario?.tipo_usuario}</p>
                  <p><strong>Status:</strong> {usuario?.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}