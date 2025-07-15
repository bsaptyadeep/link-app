export type User = {
    id: number,
    profileName: string,
    email: string
}

export type CreateUser = LoginUser & {
    profileName: string
}

export type LoginUser = {
    email: string,
    password: string,
}