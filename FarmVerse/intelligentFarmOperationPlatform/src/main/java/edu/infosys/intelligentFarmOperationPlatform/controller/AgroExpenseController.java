package edu.infosys.intelligentFarmOperationPlatform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.infosys.intelligentFarmOperationPlatform.bean.AgroExpense;
import edu.infosys.intelligentFarmOperationPlatform.bean.FarmCropReport;
import edu.infosys.intelligentFarmOperationPlatform.dao.AgroExpenseDao;
import edu.infosys.intelligentFarmOperationPlatform.service.AgroExpenseService;

@RestController
@RequestMapping("/farmverse")
@CrossOrigin(origins = "http://localhost:3636", allowCredentials = "true")
public class AgroExpenseController {

    @Autowired
    private AgroExpenseDao agroExpenseDao;

    @Autowired
    private AgroExpenseService agroExpenseService;

    @PostMapping("/exp")
    public void addAgroExpense(@RequestBody AgroExpense agroExpense) {
        agroExpenseDao.addAgroExpense(agroExpense);
    }

    @PutMapping("/exp")
    public void updateAgroExpense(@RequestBody AgroExpense agroExpense) {
        agroExpenseDao.addAgroExpense(agroExpense);
    }

    @GetMapping("/exp/{id}")
    public AgroExpense getAgroExpenseById(@PathVariable Integer id) {
        return agroExpenseDao.getAgroExpenseById(id);
    }

    @GetMapping("/exp")
    public List<AgroExpense> getAllAgroExpenses() {
        return agroExpenseDao.getAllAgroExpenses();
    }

    @DeleteMapping("/exp/{id}")
    public void deleteAgroExpenseById(@PathVariable Integer id) {
        agroExpenseDao.deleteAgroExpenseById(id);
    }

    @GetMapping("/exp-id")
    public Integer generateAgroExpenseId() {
        return agroExpenseService.generateAgroExpenseId();
    }
}