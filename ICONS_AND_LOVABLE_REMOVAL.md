O que foi alterado
------------------
- Removi o aviso/banner que mencionava o Lovable em `AGENTS.md`.
- Substituí as mensagens de erro que sugeriam "Connect Supabase in Lovable Cloud" por uma mensagem genérica solicitando que as variáveis de ambiente sejam definidas.
- Removi o utilitário específico do Lovable e adicionei um utilitário genérico de reporte de erros: `src/lib/error-reporting.ts`.
- Atualizei os metadados da aplicação em `src/routes/__root.tsx` (título, descrição, author, open-graph e twitter) para `NutriControl`.
- Adicionei entradas de link no `head` para `favicon`/`apple-touch-icon`/`manifest` — veja instruções abaixo para substituir os ícones.

O que você deve alterar para adicionar seu ícone/favicon
-----------------------------------------------------
1) Escolha os arquivos de ícone que quer usar. Recomendações comuns:
   - `favicon.ico` (geral, colocado na raiz pública)
   - `favicon-32x32.png` (32x32)
   - `favicon-16x16.png` (16x16)
   - `apple-touch-icon.png` (180x180)
   - `site.webmanifest` (manifesto PWA, opcional)

2) Coloque os arquivos na pasta `public/` do projeto (crie a pasta se não existir).
   - Exemplo de estrutura: `public/favicon.ico`, `public/apple-touch-icon.png`, `public/site.webmanifest`.

3) Atualize os links no head se quiser nomes diferentes. Atualmente `src/routes/__root.tsx` tem estas entradas no `head.links`:

```
{ rel: "icon", href: "/favicon.ico" },
{ rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
{ rel: "manifest", href: "/site.webmanifest" },
```

   - Essas rotas servem arquivos da pasta `public/` em tempo de execução.
   - Se preferir importar imagens do código (e empacotar via Vite), importe como `import faviconUrl from '../assets/favicon.ico?url'` e adicione o `href: faviconUrl` no objeto de links.

4) Teste localmente executando o servidor de desenvolvimento e recarregando a página para verificar o favicon.

Observações adicionais
----------------------
- Deixei dependências no `package.json` inalteradas (ex.: pacotes com namespace `@lovable.dev`) — remover/alterar pacotes pode afetar o build.
- Se quiser que eu também crie ícones de placeholder (png/ico) para você ou inserir imagens específicas no `public/`, posso adicioná-las se enviar os arquivos.

Se quiser, prossigo com: adicionar arquivos de ícone placeholder, ou substituir textos adicionais onde ainda houver a palavra "Lovable". Diga qual opção prefere.
