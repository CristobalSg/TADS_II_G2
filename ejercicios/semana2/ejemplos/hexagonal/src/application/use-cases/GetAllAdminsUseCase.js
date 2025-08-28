import { AdminResponseDto } from '../dtos/AdminResponseDto.js';

/**
 * Caso de uso: Obtener todos los administradores
 */
export class GetAllAdminsUseCase {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    
    async execute() {
        const admins = await this.adminRepository.findAll();
        return AdminResponseDto.fromDomainList(admins);
    }
}
