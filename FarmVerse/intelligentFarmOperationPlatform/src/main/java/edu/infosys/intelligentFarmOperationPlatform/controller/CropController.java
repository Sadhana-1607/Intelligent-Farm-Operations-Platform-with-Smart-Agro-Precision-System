package edu.infosys.intelligentFarmOperationPlatform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.infosys.intelligentFarmOperationPlatform.bean.Crop;
import edu.infosys.intelligentFarmOperationPlatform.dao.CropDao;
import edu.infosys.intelligentFarmOperationPlatform.service.CropService;
import edu.infosys.intelligentFarmOperationPlatform.service.FarmUserService;

@RestController
@RequestMapping("/farmverse/")
@CrossOrigin(origins = "http://localhost:3636", allowCredentials = "true")
public class CropController {
	
	@Autowired
	private CropDao cropDao;
	
	@Autowired
	private CropService service;
	
	@Autowired
	private FarmUserService userService;
	
	@PostMapping("/crop")
	public String addCrop(@RequestBody Crop crop) {

	    Crop newCrop = service.setUsername(crop);

	    if (!service.validateCropArea(newCrop)) {
	        return "Total crop area cannot exceed the farm area.";
	    }

	    cropDao.addCrop(newCrop);

	    return "Crop Added Successfully";
	}
	
	@PutMapping("/crop")
	public void updateCrop(@RequestBody Crop crop) {
	  cropDao.addCrop(crop);
	}
 
	@GetMapping("/crop/{id}")
	public Crop getCropById(@PathVariable String id) {
		// TODO Auto-generated method stub
		return cropDao.getCropById(id);
	}
 
	@GetMapping("/crop")
	public List<Crop> getCropsByUsername() {
		String username=userService.getUserId();
		return cropDao.getCropsByUsername(username);
	}
 
	@DeleteMapping("/crop/{id}")
	public void deleteCropById(@PathVariable String id) {
		cropDao.deleteCropById(id);
 
	}
 
	@GetMapping("/crop-id")
	public String generateCropId() {
		// TODO Auto-generated method stub
		System.out.println("Crop ID API called");
		return service.generateCropId();
	}

}
