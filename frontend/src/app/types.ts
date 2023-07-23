export interface JwtToken {
    exp: number;
    iat: number;
    sub: string;
    // Adicione outras informações que o token JWT possa conter
  }