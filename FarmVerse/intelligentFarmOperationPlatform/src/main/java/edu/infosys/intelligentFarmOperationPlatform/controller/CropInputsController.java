package edu.infosys.intelligentFarmOperationPlatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.infosys.intelligentFarmOperationPlatform.bean.CropInputs;
import edu.infosys.intelligentFarmOperationPlatform.bean.FarmCropInputs;
import edu.infosys.intelligentFarmOperationPlatform.bean.FarmCropReport;
import edu.infosys.intelligentFarmOperationPlatform.dao.CropInputsDao;
import edu.infosys.intelligentFarmOperationPlatform.service.CropInputsService;

@RestController
@RequestMapping("/farmverse")
@CrossOrigin(origins = "http://localhost:3636", allowCredentials = "true")
public class CropInputsController {

    @Autowired
    private CropInputsDao cropInputsDao;
    
    @Autowired
    private CropInputsService service;

    @PostMapping("/crop-input")
    public void addCropInputs(@RequestBody FarmCropInputs farmCropInputs) {
    	CropInputs cropInputs = service.setCropInputData(farmCropInputs);
        cropInputsDao.addCropInputs(cropInputs);
    }

    @GetMapping("/crop-input/{cropId}")
    public CropInputs getCropInputsById(@PathVariable String cropId) {
        return cropInputsDao.getCropInputsById(cropId);
    }

    @DeleteMapping("/crop-input/{cropId}")
    public void deleteCropInputsById(@PathVariable String cropId) {
        cropInputsDao.deleteCropInputsById(cropId);
    }
    
    @GetMapping("/crop-exp/{id}")
    public FarmCropReport expenseCalculation(@PathVariable String id) {
        return service.expenseCalculation(id);
    }
}