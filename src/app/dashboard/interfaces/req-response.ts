export interface UsersResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        User[];
    support:     User;
}
export interface UserResponse {
    data:    Data;
    support: User;
}
export interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}
export interface User {
    url:  string;
    text: string;
}

export interface Data {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}
export interface User {
    url:  string;
    text: string;
}
