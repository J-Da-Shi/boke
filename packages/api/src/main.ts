import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: true,
    credentials: true,
  })

  const port = Number(process.env.PORT ?? 3001)
  await app.listen(port)
  console.log(`Boke API is running on http://localhost:${port}/api`)
}

void bootstrap()
