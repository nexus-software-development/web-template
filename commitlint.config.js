// Pode perceber que está "EXP-RULE" EXP é um exmplo assim que for utilizar em um projeto
// é necessário alterar essa sigla, caso contrário o commit não será aceito.

export default {
  rules: {
    "EXP-RULE": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "EXP-RULE": ({ header }) => {
          const commitRegex = /^EXP-\d{2,}: .*/;
          return [
            commitRegex.test(header),
            `
            
            🚨 Wrong commit message! 😕
            
            Your commit message is wrong, the correct pattern is:
            
            ✅ "EXP-ID: description"
            
            ✅ full example: 
            
            git commit -m "EXP-99: Writing correctly a commit message"

            your message was :

            ❌ "${header}"
            `,
          ];
        },
      },
    },
  ],
};
