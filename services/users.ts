import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function createUserPrisma() {
  try {
    const user = await prisma.user.create({
      data: {
        email: "test1@test.fr",
        password: "123456",
        username: "test",
        role: "tester",
      },
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getUsersPrisma() {
  let users: any[] = [];
  try {
    users = await prisma.user.findMany();
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  } finally {
    return users;
  }
}
export async function createManyUsersPrisma(numberOfUsers: number) {
  try {
    for (let i = 0; i < numberOfUsers; i++) {
      const users = await prisma.user.create({
        data: {
          email: faker.internet.email(),
          password: faker.internet.password(),
          username: faker.internet.userName(),
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          dateBirthday: faker.date.past(),
          role: faker.company.catchPhraseDescriptor(),
          profilePicture: faker.image.people(),
          description: faker.company.catchPhrase(),
        },
      });
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
