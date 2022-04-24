type ActionModule = typeof import('./utils/constants')

type Action = ActionModule[keyof ActionModule]
