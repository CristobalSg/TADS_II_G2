// Importaciones de infraestructura
import { InMemoryAdminRepository } from './infrastructure/adapters/InMemoryAdminRepository.js';
import { SimplePasswordService } from './infrastructure/adapters/SimplePasswordService.js';

// Importaciones de aplicación
import { CreateAdminUseCase } from './application/use-cases/CreateAdminUseCase.js';
import { GetAllAdminsUseCase } from './application/use-cases/GetAllAdminsUseCase.js';
import { GetAdminByIdUseCase } from './application/use-cases/GetAdminByIdUseCase.js';

// Importaciones de presentación
import { AdminController } from './presentation/AdminController.js';

/**
 * Configuración de inyección de dependencias
 * Este archivo actúa como el composition root de la aplicación
 */
class Application {
    constructor() {
        this.setupDependencies();
    }
    
    setupDependencies() {
        // 1. Crear adaptadores de infraestructura
        this.adminRepository = new InMemoryAdminRepository();
        this.passwordService = new SimplePasswordService();
        
        // 2. Crear casos de uso inyectando dependencias
        this.createAdminUseCase = new CreateAdminUseCase(
            this.adminRepository,
            this.passwordService
        );
        this.getAllAdminsUseCase = new GetAllAdminsUseCase(this.adminRepository);
        this.getAdminByIdUseCase = new GetAdminByIdUseCase(this.adminRepository);
        
        // 3. Crear controlador inyectando casos de uso
        this.adminController = new AdminController(
            this.createAdminUseCase,
            this.getAllAdminsUseCase,
            this.getAdminByIdUseCase
        );
    }
    
    getAdminController() {
        return this.adminController;
    }
    
    getRepository() {
        return this.adminRepository;
    }
}

// Demostración de uso
async function demo() {
    console.log('🏗️  Inicializando Arquitectura Hexagonal - Admin Management');
    console.log('=' .repeat(60));
    
    const app = new Application();
    const controller = app.getAdminController();
    const repository = app.getRepository();
    
    // Crear algunos administradores
    console.log('\\n📝 Creando administradores...');
    
    const admin1Result = await controller.createAdmin({
        email: 'admin@smartparking.com',
        name: 'Carlos Admin',
        password: 'securepass123'
    });
    
    const admin2Result = await controller.createAdmin({
        email: 'supervisor@smartparking.com',
        name: 'Ana Supervisor',
        password: 'supervisor456'
    });
    
    console.log('Admin 1:', admin1Result);
    console.log('Admin 2:', admin2Result);
    
    // Intentar crear admin duplicado
    console.log('\\n❌ Intentando crear admin duplicado...');
    const duplicateResult = await controller.createAdmin({
        email: 'admin@smartparking.com',
        name: 'Duplicate Admin',
        password: 'password789'
    });
    console.log('Resultado duplicado:', duplicateResult);
    
    // Obtener todos los administradores
    console.log('\\n📋 Obteniendo todos los administradores...');
    const allAdminsResult = await controller.getAllAdmins();
    console.log('Todos los admins:', allAdminsResult);
    
    // Obtener admin por ID
    if (admin1Result.success) {
        console.log('\\n🔍 Obteniendo admin por ID...');
        const adminByIdResult = await controller.getAdminById(admin1Result.data.id);
        console.log('Admin por ID:', adminByIdResult);
    }
    
    // Estadísticas del repositorio
    console.log('\\n📊 Estadísticas del repositorio:');
    console.log(repository.getStats());
    
    console.log('\\n✅ Demostración completada!');
    console.log('\\n🏗️  Ventajas de la Arquitectura Hexagonal demostradas:');
    console.log('   • Separación clara de responsabilidades');
    console.log('   • Fácil testing (puedes mockear cualquier puerto)');
    console.log('   • Independencia de frameworks');
    console.log('   • Intercambio fácil de adaptadores');
    console.log('   • Lógica de dominio protegida');
}

// Ejecutar demo
demo().catch(console.error);

export { Application };
