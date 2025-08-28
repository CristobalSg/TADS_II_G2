/**
 * Puerto de salida - Interface para servicios de encriptación
 */
export class PasswordServicePort {
    async hash(password) {
        throw new Error('Method not implemented');
    }
    
    async compare(password, hash) {
        throw new Error('Method not implemented');
    }
}
