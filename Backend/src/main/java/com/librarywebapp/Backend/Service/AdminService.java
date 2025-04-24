package com.librarywebapp.Backend.Service;

import com.librarywebapp.Backend.DTO.Request.AdminAddDTO;
import com.librarywebapp.Backend.DTO.Request.CustomerAddDTO;
import com.librarywebapp.Backend.DTO.Response.AdminGeneralDTO;
import com.librarywebapp.Backend.DTO.Response.CustomerGeneralDTO;
import com.librarywebapp.Backend.Model.Admin;
import com.librarywebapp.Backend.Model.Customer;
import com.librarywebapp.Backend.Repository.AdminRepository;
import com.librarywebapp.Backend.Repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.AbstractMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;

    public ResponseEntity<Admin> registerAdmin(AdminAddDTO adminAddDTO) {
        Admin admin = new Admin();
        admin.setFirstName(adminAddDTO.getFirstName());
        admin.setLastName(adminAddDTO.getLastName());
        admin.setEmail(adminAddDTO.getEmail());
        admin.setAddress(adminAddDTO.getAddress());
        admin.setPassword(adminAddDTO.getPassword());
        admin.setPhoneNumber(adminAddDTO.getPhoneNumber());
        adminRepository.save(admin);
        ResponseEntity<Admin> response = new ResponseEntity<>(admin, HttpStatus.CREATED);
        return response;

    }


    public ResponseEntity<AdminGeneralDTO> getDetails(Integer id) {
        AdminGeneralDTO adminGeneralDTO = new AdminGeneralDTO();
        Optional<Admin> optionalAdmin = adminRepository.findById(id);

        if (optionalAdmin.isPresent()) {
            Admin admin = optionalAdmin.get();
            adminGeneralDTO.setAdminId(admin.getAdminId());
            adminGeneralDTO.setFirstName(admin.getFirstName());
            adminGeneralDTO.setLastName((admin.getLastName()));
            adminGeneralDTO.setEmail(admin.getEmail());
            adminGeneralDTO.setAddress(admin.getAddress());
            return ResponseEntity.ok(adminGeneralDTO);
        } else {
            ResponseEntity responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return responseEntity;


        }
    }

    public AdminGeneralDTO updateAdmin(Integer id, AdminAddDTO adminAddDTO) {
        Admin admin = adminRepository.findById(id).orElseThrow();
        admin.setFirstName(adminAddDTO.getFirstName());
        admin.setLastName(adminAddDTO.getLastName());
        admin.setEmail(adminAddDTO.getEmail());
        admin.setAddress(adminAddDTO.getAddress());
        admin.setPassword(adminAddDTO.getPassword());
        admin.setPhoneNumber(adminAddDTO.getPhoneNumber());
        Admin updatedAdmin = adminRepository.save(admin);
        return convertToDTO(updatedAdmin);

    }

    private AdminGeneralDTO convertToDTO(Admin admin) {
        AdminGeneralDTO adminGeneralDTO = new AdminGeneralDTO();
        adminGeneralDTO.setAdminId(admin.getAdminId());
        adminGeneralDTO.setFirstName(admin.getFirstName());
        adminGeneralDTO.setLastName(admin.getLastName());
        adminGeneralDTO.setEmail(admin.getEmail());
        adminGeneralDTO.setAddress(admin.getAddress());
        return adminGeneralDTO;


    }

    public ResponseEntity<String> deleteAdmin(Integer id) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent()) {
            adminRepository.deleteById(id);
            return ResponseEntity.ok("Admin deleted successfully");
        }
        else{
            ResponseEntity responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return responseEntity;
        }

    }


    public List<AdminGeneralDTO> getAllAdmins() {
        return adminRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toUnmodifiableList());
    }

    public String authenticate(Integer id, String password) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent() && password.equals(optionalAdmin.get().getPassword())) {
            return "Welcome";
        }
        else{
            return "Authentication failed";
        }

    }
}
