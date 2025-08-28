import { Admin } from '../../domain/entities/Admin.js';
import { AdminResponseDto } from '../dtos/AdminResponseDto.js';

/**
 * Caso de uso: Crear Administrador
 * Implementa la lógica de aplicación para crear un nuevo administrador
 */
export class CreateAdminUseCase {
    constructor(adminRepository, passwordService) {
        this.adminRepository = adminRepository;
        this.passwordService = passwordService;
    }
    
    async execute(createAdminDto) {
        // 1. Verificar que el email no exista
        const existingAdmin = await this.adminRepository.findByEmail(createAdminDto.email);
        if (existingAdmin) {
            throw new Error('Admin with this email already exists');
        }
        
        // 2. Encriptar contraseña
        const passwordHash = await this.passwordService.hash(createAdminDto.password);
        
        // 3. Crear entidad de dominio
        const adminId = this.generateId();
        const admin = Admin.create(
            adminId,
            createAdminDto.email,
            createAdminDto.name,
            passwordHash
        );
        
        // 4. Persistir
        await this.adminRepository.save(admin);
        
        // 5. Retornar DTO de respuesta
        return AdminResponseDto.fromDomain(admin);
    }
    
    generateId() {
        return `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}
