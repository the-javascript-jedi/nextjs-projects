npx create-next-app@latest
npm install prisma
npm add @prisma/client@latest
npm install @prisma/client

<!-- in powershell execute below command -->

# remove custom generated client if it exists

> > if (Test-Path .\app\generated\prisma) { Remove-Item -Recurse -Force .\app\generated\prisma }
> >
> > # remove next cache
> >
> > if (Test-Path .\.next) { Remove-Item -Recurse -Force .\.next }

npx prisma generate
npx prisma migrate dev --name init
