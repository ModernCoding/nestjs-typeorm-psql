# Commands used to initiate repo

`nvm i --lts`
`npm install -g @nestjs/cli`
`nest new nestjs-typeorm-psql`

When asked, choose pnpm

Install
`pnpm i @nestjs/typeorm typeorm pg`
`pnpm i @nestjs/config`

`nest g module database`
`nest g resource items`

Create file typeOrm.config.ts
Create migrations folder
Add typeorm scripts in package.json

Migration files:
`npm run typeorm:create-migration --name=Items`
