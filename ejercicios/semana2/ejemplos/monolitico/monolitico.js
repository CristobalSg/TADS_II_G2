// TODO EN UN SOLO ARCHIVO - MONOLITO

// 🔍 Problemas del monolito:

// Todo mezclado: validación, lógica de negocio, persistencia
// Difícil de testear
// Difícil de mantener
// Acoplamiento alto


// Base de datos en memoria (simular)
const admins = [];
const tenants = [];

// Lógica de validación
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Lógica de encriptación
async function hashPassword(password) {
    return password + "encrypted";
}

// Lógica de negocio y persistencia TODO JUNTO
async function registerAdmin(adminData) {
    // Validaciones
    if (!validateEmail(adminData.email)) {
        throw new Error('Invalid email');
    }


    // Verificar email único en tenant
    const existing = admins.find((a) =>
        a.email === adminData.email && a.tenantId === adminData.tenantId
    );
    if (existing) {
        throw new Error('Email already exists in tenant');
    }

    // Crear admin
    const admin = {
        id: admins.length + 1,
        ...adminData,
        password: await hashPassword(adminData.password),
        createdAt: new Date(),
        isActive: true
    };

    // "Guardar" en memoria
    admins.push(admin);

    // Retornar sin password
    const { password, ...safeAdmin } = admin;
    return safeAdmin;
}

// Función de prueba
async function demo() {
    // Crear tenant de prueba
    tenants.push({ id: 'tenant-1', name: 'Hospital Central' });

    try {
        const newAdmin = await registerAdmin({
            email: 'admin@hospital.com',
            name: 'Dr. Admin',
            tenantId: 'tenant-1',
            password: 'securePass123'
        });
        console.log('Admin creado:', newAdmin);
    } catch (error) {
        console.error('Error:', error.message);
    }
}



demo();

