
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create default admin user
  const hashedPassword = await bcrypt.hash('johndoe123', 12);
  const adminUser = await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {
      emailVerified: true,
    },
    create: {
      email: 'john@doe.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
      emailVerified: true,
    },
  });

  console.log('✅ Created admin user:', adminUser.email);

  // Create forum categories
  const categories = [
    {
      name: 'Moringa Cultivation',
      description: 'Discuss moringa farming techniques, growing tips, and cultivation practices in the Philippines.',
      color: '#10b981',
      icon: 'Sprout',
      order: 1,
    },
    {
      name: 'Health & Nutrition',
      description: 'Share health benefits, nutritional information, and medical insights about moringa.',
      color: '#3b82f6',
      icon: 'Heart',
      order: 2,
    },
    {
      name: 'Recipes & Cooking',
      description: 'Share Filipino recipes featuring moringa and cooking techniques.',
      color: '#f59e0b',
      icon: 'ChefHat',
      order: 3,
    },
    {
      name: 'General Discussion',
      description: 'General topics about moringa, community events, and foundation activities.',
      color: '#8b5cf6',
      icon: 'MessageCircle',
      order: 4,
    },
  ];

  for (const category of categories) {
    const result = await prisma.forumCategory.upsert({
      where: { name: category.name },
      update: category,
      create: category,
    });
    console.log(`✅ Created category: ${result.name}`);
  }

  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
