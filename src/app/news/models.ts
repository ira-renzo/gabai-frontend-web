export interface News {
  title: string
  content: string
  timestamp: number
  key: string
  attachments: any
}

export interface Attachment {
  name: string
  data: string
}