import { UserType } from "./user-type";

export class ChatListResponseType {
    data?: ChatListResponseDetailType
    message: string

    public constructor(message: string, data?: ChatListResponseDetailType){
        this.data = data
        this.message = message
    }
}

export class ChatListResponseDetailType {
    data_message: Array<ChatListDataType>
    user: UserType

    public constructor(data_message: Array<ChatListDataType>, user: UserType){
        this.data_message = data_message
        this.user = user
    }
}

export class ChatListDataType{
    id: number
    bot_response: string
    bot_timestamp: string
    user_message: string
    user_timestamp: string

    public constructor(id: number, bot_response: string, bot_timestamp: string, user_message: string, user_timestamp: string){
        this.id = id
        this.bot_response = bot_response
        this.bot_timestamp = bot_timestamp
        this.user_message = user_message
        this.user_timestamp = user_timestamp
    }
}