export const githubAccounts = [
  {
    key: 'kageryo',
    label: 'KageRyo',
    username: 'KageRyo',
    profileUrl: 'https://github.com/KageRyo'
  },
  {
    key: 'coderyostudio',
    label: 'CodeRyo',
    username: 'CodeRyoStudio',
    profileUrl: 'https://github.com/CodeRyoStudio'
  },
  {
    key: 'coderyomc',
    label: 'CodeRyoMC',
    username: 'CodeRyoMC',
    profileUrl: 'https://github.com/CodeRyoMC'
  }
]

export const githubAccountsByKey = Object.fromEntries(
  githubAccounts.map(account => [account.key, account])
)
