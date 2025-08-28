import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs'

class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    
    async createAdmin(email, name, password) {
        // Validar email único
        const existing = await this.adminRepository.findByEmail(email);
        if (existing) {
            throw new Error('Email already exists');
        }
        
        // Encriptar password
        const passwordHash = await bcrypt.hash(password, 10);
        
        // Crear admin
        const admin = new Admin(
            Date.now().toString(),
            email,
            name,
            passwordHash
        );
        
        // Guardar
        await this.adminRepository.save(admin);
        
        return admin.toSafe();
    }
    
    getAllAdmins() {
        return this.adminRepository.findAll().map(a => a.toSafe());
    }
}

export default AdminService; // ← ES Module export default