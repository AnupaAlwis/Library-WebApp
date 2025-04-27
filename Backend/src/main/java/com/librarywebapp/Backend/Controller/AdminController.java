package com.librarywebapp.Backend.Controller;

import com.librarywebapp.Backend.DTO.Request.AdminAddDTO;
import com.librarywebapp.Backend.DTO.Request.CustomerAddDTO;
import com.librarywebapp.Backend.DTO.Response.AdminGeneralDTO;
import com.librarywebapp.Backend.DTO.Response.CustomerGeneralDTO;
import com.librarywebapp.Backend.Model.Admin;
import com.librarywebapp.Backend.Model.Customer;
import com.librarywebapp.Backend.Service.AdminService;
import com.librarywebapp.Backend.Service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @GetMapping("authenticate")
    public String authenticate(@RequestParam Integer id, @RequestParam String password) {
        return adminService.authenticate(id,password);
    }
    @PostMapping("register")
    public ResponseEntity<Admin> register(@RequestBody AdminAddDTO adminAddDTO) {
        return adminService.registerAdmin(adminAddDTO);
    }

    @GetMapping("details")
    public ResponseEntity<AdminGeneralDTO> getAdminById(@RequestParam Integer id) {
        return adminService.getDetails(id);
    }

    @GetMapping("all")
    public List<AdminGeneralDTO> getAllAdmins() {
        return adminService.getAllAdmins();

    }

    @PutMapping("update")
    public ResponseEntity<AdminGeneralDTO> updateAdmin(@RequestParam Integer id, @RequestBody AdminAddDTO adminAddDTO) {
        try {
            AdminGeneralDTO updatedAdmin = adminService.updateAdmin(id, adminAddDTO);
            return ResponseEntity.ok(updatedAdmin);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("delete")
    public ResponseEntity<String> deleteAdmin(@RequestParam Integer id) {
        return adminService.deleteAdmin(id);
    }

    @PutMapping("updateCustomer")
    public ResponseEntity<CustomerGeneralDTO> updateCustomer(@RequestParam Integer id, @RequestBody CustomerAddDTO customerAddDTO) {
        try {
            CustomerGeneralDTO updatedCustomer = adminService.updateCustomer(id, customerAddDTO);
            return ResponseEntity.ok(updatedCustomer);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}
