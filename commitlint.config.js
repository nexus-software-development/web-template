export default {
  rules: {
    "SIGLA_DO_PROJETO-RULE": [2, "always"]
  },
  plugins: [
    {
      rules: {
        "SIGLA_DO_PROJETO-RULE": ({ header }) => {
          const commitRegex = /^SIGLA_DO_PROJETO-\d{2,}: .*/;
          return [
            commitRegex.test(header),
            `
            
            🚨 Wrong commit message! 😕
            
            Your commit message is wrong, the correct pattern is:
            
            ✅ "SIGLA_DO_PROJETO-ID: description"
            
            ✅ full example: 
            
            git commit -m "SIGLA_DO_PROJETO-99: Writing correctly a commit message"

            your message was :

            ❌ "${header}"
            `
          ];
        }
      }
    }
  ]
};
