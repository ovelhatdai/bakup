# 🚀 CONFIGURAÇÃO COMPLETA DO SISTEMA

## ⚠️ IMPORTANTE: Siga os passos na ordem exata!

### Passo 1: Conectar ao Supabase
1. Clique no botão "Connect to Supabase" no canto superior direito
2. Configure seu projeto Supabase
3. Aguarde a conexão ser estabelecida

### Passo 2: Executar Migrações
1. Execute todas as migrações SQL existentes no projeto
2. Execute a nova migração `setup_test_data.sql`

### Passo 3: Criar Usuários no Supabase Auth
**CRÍTICO:** Os usuários devem ser criados no painel do Supabase Auth:

1. Acesse seu projeto no [Supabase Dashboard](https://app.supabase.com)
2. Vá para **Authentication** → **Users**
3. Clique em **"Add user"**
4. Crie os seguintes usuários:

#### Usuário 1 - Admin Geral
- **Email:** `admin@advogandodash.com`
- **Password:** `Admin123!`
- **Confirm Password:** `Admin123!`
- ✅ **Anote o UUID gerado**

#### Usuário 2 - Admin Escritório
- **Email:** `admin.escritorio@escritoriomodelo.com`
- **Password:** `Escritorio123!`
- **Confirm Password:** `Escritorio123!`
- ✅ **Anote o UUID gerado**

#### Usuário 3 - Vendedor
- **Email:** `vendedor@escritoriomodelo.com`
- **Password:** `Vendedor123!`
- **Confirm Password:** `Vendedor123!`
- ✅ **Anote o UUID gerado**

### Passo 4: Inserir Dados dos Usuários
Execute o seguinte SQL no **SQL Editor** do Supabase, substituindo os UUIDs:

```sql
-- Substitua os UUIDs pelos valores reais do Supabase Auth
INSERT INTO usuarios (
  id,
  email,
  nome,
  tipo_usuario,
  escritorio_id,
  cargo_id,
  meta_mensal_contratos,
  status,
  data_admissao
) VALUES 
-- Admin Geral
(
  'COLE_AQUI_UUID_DO_ADMIN_GERAL',
  'admin@advogandodash.com',
  'Administrador Geral',
  'admin_geral',
  NULL,
  NULL,
  0,
  'ativo',
  CURRENT_DATE
),
-- Admin Escritório
(
  'COLE_AQUI_UUID_DO_ADMIN_ESCRITORIO',
  'admin.escritorio@escritoriomodelo.com',
  'João Silva',
  'admin_escritorio',
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'e1f2g3h4-i5j6-7890-efgh-ij1234567890',
  0,
  'ativo',
  CURRENT_DATE
),
-- Vendedor
(
  'COLE_AQUI_UUID_DO_VENDEDOR',
  'vendedor@escritoriomodelo.com',
  'Maria Santos',
  'funcionario',
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'f1g2h3i4-j5k6-7890-fghi-jk1234567890',
  30,
  'ativo',
  CURRENT_DATE
);

-- Atualizar o created_by do esquema de comissão
UPDATE esquemas_comissao 
SET created_by = 'COLE_AQUI_UUID_DO_ADMIN_ESCRITORIO'
WHERE id = 'g1h2i3j4-k5l6-7890-ghij-kl1234567890';
```

### Passo 5: Testar o Login
Agora você pode fazer login com qualquer um dos usuários:

- **Admin Geral:** `admin@advogandodash.com` / `Admin123!`
- **Admin Escritório:** `admin.escritorio@escritoriomodelo.com` / `Escritorio123!`
- **Vendedor:** `vendedor@escritoriomodelo.com` / `Vendedor123!`

---

## 🔍 Verificação

Para verificar se tudo está funcionando:

1. **Teste o login** com cada usuário
2. **Verifique os dashboards** específicos de cada tipo
3. **Confirme as permissões** de acesso

---

## ❌ Solução de Problemas

### "Invalid login credentials"
- ✅ Verifique se os usuários foram criados no Supabase Auth
- ✅ Confirme se as senhas estão corretas
- ✅ Verifique se os dados foram inseridos na tabela `usuarios`

### "User not found in database"
- ✅ Execute o SQL do Passo 4 com os UUIDs corretos
- ✅ Verifique se os UUIDs correspondem aos do Supabase Auth

### Problemas de Permissão
- ✅ Verifique as políticas RLS no Supabase
- ✅ Confirme se o `tipo_usuario` está correto na tabela `usuarios`