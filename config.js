// UKA RENTALS — configuração do aplicativo
// A chave "anon" é pública por natureza (protegida pelas regras de segurança do banco).
// NUNCA coloque aqui a chave "service_role".
window.UKA_CONFIG = {
  SUPABASE_URL: 'https://zrrlphqbspwbaxqogztm.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpycmxwaHFic3B3YmF4cW9nenRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxOTUxNzgsImV4cCI6MjExMDc3MTE3OH0.bdIxpsHS30vP2Sh76eyVsi6xGJtpYAlPH7cfbqHD218',
  // WhatsApp da locadora (só números, com 55 + DDD):
  WHATSAPP: '5512991016671'
};
// A aba "Importar" fica escondida: os dados vêm do sistema UKA no Claude, atualizados pelo Claude.
document.write('<style>[data-tab="imp"]{display:none!important}</style>');
