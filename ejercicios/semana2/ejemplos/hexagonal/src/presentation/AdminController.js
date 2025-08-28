import { CreateAdminDto } from '../application/dtos/CreateAdminDto.js';

/**
 * Controlador de administradores - Capa de presentación
 * Maneja la entrada y salida de datos, coordinando los casos de uso
 */
export class AdminController {
    constructor(createAdminUseCase, getAllAdminsUseCase, getAdminByIdUseCase) {
        this.createAdminUseCase = createAdminUseCase;
        this.getAllAdminsUseCase = getAllAdminsUseCase;
        this.getAdminByIdUseCase = getAdminByIdUseCase;
    }
    
    async createAdmin(requestData) {
        try {
            // Validar entrada
            this.validateCreateAdminRequest(requestData);
            
            // Crear DTO
            const createAdminDto = new CreateAdminDto(
                requestData.email,
                requestData.name,
                requestData.password
            );
            
            // Ejecutar caso de uso
            const result = await this.createAdminUseCase.execute(createAdminDto);
            
            return {
                success: true,
                data: result,
                message: 'Admin created successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to create admin'
            };
        }
    }
    
    async getAllAdmins() {
        try {
            const result = await this.getAllAdminsUseCase.execute();
            return {
                success: true,
                data: result,
                message: 'Admins retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve admins'
            };
        }
    }
    
    async getAdminById(adminId) {
        try {
            const result = await this.getAdminByIdUseCase.execute(adminId);
            return {
                success: true,
                data: result,
                message: 'Admin retrieved successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                message: 'Failed to retrieve admin'
            };
        }
    }
    
    validateCreateAdminRequest(data) {
        if (!data) {
            throw new Error('Request data is required');
        }
        
        if (typeof data !== 'object') {
            throw new Error('Request data must be an object');
        }
    }
}
