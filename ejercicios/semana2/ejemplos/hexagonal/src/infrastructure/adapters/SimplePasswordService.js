import { PasswordServicePort } from '../../domain/ports/PasswordServicePort.js';

/**
 * Adaptador de infraestructura - Servicio de encriptación simple
 * En un proyecto real, usarías bcryptjs o similar
 */
export class SimplePasswordService extends PasswordServicePort {
    constructor() {
        super();
    }
    
    async hash(password) {
        // Simulación simple de hash - en producción usar bcrypt
        const salt = this.generateSalt();
        const hashed = this.simpleHash(password + salt);
        return `${salt}:${hashed}`;
    }
    
    async compare(password, hash) {
        try {
            const [salt, hashedPassword] = hash.split(':');
            const testHash = this.simpleHash(password + salt);
            return testHash === hashedPassword;
        } catch (error) {
            return false;
        }
    }
    
    generateSalt() {
        return Math.random().toString(36).substring(2, 15);
    }
    
    simpleHash(input) {
        let hash = 0;
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString(36);
    }
}
