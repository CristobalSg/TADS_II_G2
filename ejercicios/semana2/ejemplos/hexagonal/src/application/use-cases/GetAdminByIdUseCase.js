import { AdminResponseDto } from '../dtos/AdminResponseDto.js';

/**
 * Caso de uso: Obtener administrador por ID
 */
export class GetAdminByIdUseCase {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    
    async execute(adminId) {
        if (!adminId) {
            throw new Error('Admin ID is required');
        }
        
        const admin = await this.adminRepository.findById(adminId);
        
        if (!admin) {
            throw new Error('Admin not found');
        }
        
        return AdminResponseDto.fromDomain(admin);
    }
}
