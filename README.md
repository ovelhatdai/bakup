# ADVOGANDODASH - Sistema de Gestão Jurídica

Sistema completo de gestão para escritórios jurídicos previdenciários com hierarquia multi-nível.

## 🚀 Características

### Hierarquia de Usuários
- **Admin Geral**: Acesso total ao sistema, gerencia todos os escritórios
- **Admin Escritório**: Gerencia apenas seu escritório e usuários
- **Funcionários**: Acesso limitado às suas funções (vendedor, administrativo, etc.)

### Funcionalidades Principais

#### ✅ Semana 1 - Base Implementada
- [x] Autenticação simples com email/senha
- [x] Hierarquia multi-nível com RLS
- [x] Gestão de escritórios completa
- [x] Dashboards adaptativos por tipo de usuário
- [x] Cargos personalizáveis por escritório
- [x] Tipos de benefício configuráveis
- [x] Sistema de validação robusto
- [x] Auditoria e logs de sistema

#### 🔄 Próximas Semanas
- [ ] Sistema de vendas completo
- [ ] Cálculo automático de comissões
- [ ] CRM integrado
- [ ] Relatórios avançados
- [ ] Dashboard para TV
- [ ] Notificações em tempo real

## 🛠️ Stack Tecnológica

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Headless UI
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

4. Configure o Supabase:
   - Acesse [supabase.com](https://supabase.com)
   - Crie um novo projeto
   - Copie a URL e a chave anônima para o arquivo `.env`

5. Execute o projeto:
   ```bash
   npm run dev
   ```

## 🗄️ Estrutura do Banco de Dados

### Principais Tabelas

- **escritorios**: Dados dos escritórios jurídicos
- **usuarios**: Usuários com hierarquia definida
- **cargos**: Cargos personalizáveis por escritório
- **tipos_beneficio**: Tipos de benefício configuráveis
- **vendas**: Registro de vendas (próxima semana)
- **esquemas_comissao**: Esquemas de comissão flexíveis (próxima semana)

### Segurança

- Row Level Security (RLS) implementado
- Políticas de acesso por hierarquia
- Validação de dados automática
- Auditoria completa de mudanças

## 🎨 Design System

### Cores Principais
- **Primário**: #3B82F6 (Blue 500)
- **Sucesso**: #10B981 (Green 500)
- **Aviso**: #F59E0B (Yellow 500)
- **Erro**: #EF4444 (Red 500)

### Componentes
- Cards responsivos
- Formulários com validação
- Tabelas com filtros
- Gráficos interativos
- Modais e overlays

## 📱 Responsividade

- Mobile First
- Breakpoints: 768px (tablet), 1024px (desktop)
- Componentes adaptáveis
- Navegação otimizada

## 🔐 Segurança

- Autenticação via Supabase
- Autorização por hierarquia
- Validação de dados robusta
- Logs de auditoria
- Proteção contra ataques comuns

## 📊 Dashboards

### Admin Geral
- Visão global de todos os escritórios
- Estatísticas consolidadas
- Alertas e notificações
- Gráficos de performance

### Admin Escritório
- Dados específicos do escritório
- Gestão de usuários
- Acompanhamento de metas
- Ranking de vendedores

### Funcionário
- Dashboard personalizado
- Metas individuais
- Comissões pessoais
- Conquistas e progressos

## 🚀 Roadmap

### Semana 2: Vendas e Comissões
- Sistema completo de vendas
- Cálculo automático de comissões
- Esquemas flexíveis de comissão
- Relatórios de vendas

### Semana 3: CRM
- Gestão de clientes
- Pipeline de vendas
- Histórico de interações
- Upload de documentos

### Semana 4: Relatórios e Dashboard TV
- Relatórios avançados
- Dashboard para TV
- Notificações push
- Integração com WhatsApp

## 🤝 Contribuição

Este é um projeto proprietário. Para contribuições, entre em contato com a equipe de desenvolvimento.

## 📝 Licença

Propriedade de ADVOGANDODASH © 2024. Todos os direitos reservados.

## 📞 Suporte

Para suporte técnico, entre em contato:
- Email: suporte@advogandodash.com
- Telefone: (11) 99999-9999