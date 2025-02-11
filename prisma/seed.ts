import {
  Event,
  Image,
  Map,
  PrismaClient,
  Tag,
  TagOnEvent,
  User,
} from "@prisma/client";
import { faker, fakerUK } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
  const tagEventId = faker.string.uuid()
  const tagClubId = faker.string.uuid()

  const tagEvent: Tag = {
    id: tagEventId,
    name: "Event",
  };
  await prisma.tag.upsert({
    where: {
      id: tagEvent.id,
    },
    create: tagEvent,
    update: tagEvent,
  });
  const tagClub: Tag = {
    id: tagClubId,
    name: "Club",
  };
  await prisma.tag.upsert({
    where: {
      id: tagClub.id,
    },
    create: tagClub,
    update: tagClub,
  });

  for (let index = 0; index < 200; index++) {
    const mapId: string = faker.string.uuid();
    const map: Map = {
      id: mapId,
      y: faker.location.longitude({ min: 22, max: 39 }),
      x: faker.location.longitude({ min: 46.732213, max: 52 }),
    };
    await prisma.map.upsert({
      where: {
        id: map.id,
      },
      create: map,
      update: map,
    });
    const eventId: string = faker.string.uuid();
    const event: Event = {
      id: eventId,
      header: fakerUK.word.words(5),
      address: fakerUK.location.streetAddress(),
      phone: fakerUK.phone.number(),
      description: fakerUK.word.words(15),
      content: fakerUK.lorem.text(),
      mapId: mapId,
    };
    await prisma.event.upsert({
      where: {
        id: event.id,
      },
      create: event,
      update: event,
    });
    for (let index = 0; index < 3; index++) {
      const image: Image = {
        id: faker.string.uuid(),
        src: faker.image.urlLoremFlickr({ width: 600, height: 600 }),
        eventId: eventId,
      };
      await prisma.image.upsert({
        where: {
          id: image.id,
        },
        create: image,
        update: image,
      });
    }
    for (let index = 0; index < 3; index++) {
      const tagId: string = faker.string.uuid();
      const tag: Tag = {
        id: tagId,
        name: fakerUK.word.words(1),
      };
      await prisma.tag.upsert({
        where: {
          id: tag.id,
        },
        create: tag,
        update: tag,
      });
      const tagOnEvent: TagOnEvent = {
        eventId: eventId,
        tagId: tagId,
        createAt: new Date(),
        updateAt: new Date(),
      };
      await prisma.tagOnEvent.upsert({
        where: {
          eventId_tagId: {
            eventId: tagOnEvent.eventId,
            tagId: tagOnEvent.tagId,
          },
        },
        create: tagOnEvent,
        update: tagOnEvent,
      });
    }
    const tagOnEvent: TagOnEvent = {
      eventId: eventId,
      tagId: [tagEventId, tagClubId][Math.floor(Math.random() * 2)],
      createAt: new Date(),
      updateAt: new Date(),
    };
    await prisma.tagOnEvent.upsert({
      where: {
        eventId_tagId: {
          eventId: tagOnEvent.eventId,
          tagId: tagOnEvent.tagId,
        },
      },
      create: tagOnEvent,
      update: tagOnEvent,
    });
  }
  for (let index = 0; index < 20; index++) {
    const user: User = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };
    await prisma.user.upsert({
      where: {
        id: user.id,
      },
      create: user,
      update: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
