Set up project

```bash
mkdir bun-express-sequelize
cd bun-express-sequelize
bun init -y
bun add express sequelize mysql2
bun add -d @types/express @types/node
bun add body-parser
bun add -d @types/body-parser
bun add multer
bun add -d @types/multer

```

# bun-express-sequelize

To install dependencies:

```bash
bun install

```

To run:

```bash
bun run index.ts
```
Create DB
```sh
bun src/create-database.ts
```
<!-- create tbl -->

```sh
bunx sequelize-cli migration:generate --name create-users
```
Init 
```sh
bunx sequelize-cli init
```

Migreate

```sh
bunx sequelize-cli db:migrate
```

Undo the last migration

```sh
bunx sequelize-cli db:migrate:undo
```

Undo all migrations

```sh
bunx sequelize-cli db:migrate:undo:all
```

Seed DB

```sh
bunx sequelize-cli db:seed:all
```

Undo all seeders

```sh
bunx sequelize-cli db:seed:undo:all
```

Undo the last seeder

```sh
bunx sequelize-cli db:seed:undo
```
