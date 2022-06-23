declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV?: 'production' | 'development' | 'test';
    PORT?: string;
    TZ?: string;
    MONGO_USER?: string;
    MONGO_PASS?: string;
    MONGO_HOST?: string;
    MONGO_PORT?: string;
    MONGO_DB?: string;
    MONGO_AUTH_SOURCE?: string;
  }
}
