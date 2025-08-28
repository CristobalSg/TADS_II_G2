
import {AdminRepository} from "./repositories/AdminRespository.js"

import AdminService from './services/AdminService.js';



// Setup
const adminRepository = new AdminRepository();
const adminService = new AdminService(adminRepository);

// Demo
async function demo() {
    try {
        // Crear admin
        const admin = await adminService.createAdmin(
            'admin@hospital.com',
            'Dr. Admin',
            'password123'
        );
        console.log('Admin creado:', admin);
        
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

demo();