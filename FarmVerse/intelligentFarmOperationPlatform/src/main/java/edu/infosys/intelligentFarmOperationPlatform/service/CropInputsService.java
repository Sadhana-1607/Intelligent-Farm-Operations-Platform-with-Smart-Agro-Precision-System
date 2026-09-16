package edu.infosys.intelligentFarmOperationPlatform.service;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.infosys.intelligentFarmOperationPlatform.bean.AgroExpense;
import edu.infosys.intelligentFarmOperationPlatform.bean.Crop;
import edu.infosys.intelligentFarmOperationPlatform.bean.CropExpense;
import edu.infosys.intelligentFarmOperationPlatform.bean.CropInputs;
import edu.infosys.intelligentFarmOperationPlatform.bean.Farm;
import edu.infosys.intelligentFarmOperationPlatform.bean.FarmCropInputs;
import edu.infosys.intelligentFarmOperationPlatform.bean.FarmCropReport;
import edu.infosys.intelligentFarmOperationPlatform.dao.AgroExpenseDao;
import edu.infosys.intelligentFarmOperationPlatform.dao.CropDao;
import edu.infosys.intelligentFarmOperationPlatform.dao.CropInputsDao;
import edu.infosys.intelligentFarmOperationPlatform.dao.FarmDao;

@Service
public class CropInputsService {
	
	@Autowired
	private CropDao cropDao;
	@Autowired
	private FarmDao farmDao;
	@Autowired
	private AgroExpenseDao agroExpenseDao;
	@Autowired
	private CropInputsDao cropInputsDao;
	
	public FarmCropInputs setFarmCropInputData(String cropId) {
		Crop crop = cropDao.getCropById(cropId);
		Farm farm = farmDao.getFarmById(crop.getFarmId());
		return new FarmCropInputs(crop, farm.getSoil());
	}
	
	public CropInputs setCropInputData(FarmCropInputs farmCropInputs) {
		CropInputs cropInputs = new CropInputs(farmCropInputs);
		cropInputs.setAgroTools(1.0);
		return cropInputs;
	}
	
	public FarmCropReport expenseCalculation(String cropId) {
		List<AgroExpense> expenseList=agroExpenseDao.getAllAgroExpenses();
		Map<String,AgroExpense> expenseMap=new HashMap<String, AgroExpense>();
 
		for(AgroExpense ae:expenseList) {
			expenseMap.put(ae.getExpenseName(), ae);
		}
		
		CropInputs cropInputs=cropInputsDao.getCropInputsById(cropId);
		Class<?> clazz=cropInputs.getClass();
		Field[] fields=clazz.getDeclaredFields();
		
		CropExpense cropExpense=new CropExpense(cropInputs.getCropId());
 
		Double totalValue=0.0;
		
		try {
		for(Field fd:fields) {
			fd.setAccessible(true);
			String fname=fd.getName();
			if(fname.equalsIgnoreCase("cropId"))
				continue;
			AgroExpense ae=expenseMap.get(fname);
			if(ae!=null) {
				String val=fd.get(cropInputs).toString();
				Double perAcre=ae.getRatePerUnit()*Double.parseDouble(val);
				totalValue=totalValue+perAcre;
				if(fname.equalsIgnoreCase("waterGallon"))
					cropExpense.setWaterGallon(perAcre);
				else if(fname.equalsIgnoreCase("fertilizer"))
					cropExpense.setFertilizer(perAcre);
				else if(fname.equalsIgnoreCase("pesticides"))
					cropExpense.setPesticides(perAcre);
				else if(fname.equalsIgnoreCase("tractorHour"))
					cropExpense.setTractorHour(perAcre);
				else if(fname.equalsIgnoreCase("agroTools"))
					cropExpense.setAgroTools(perAcre);
			}// end of if
		}// end of  loop
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		Crop crop= cropDao.getCropById(cropId);
		Farm farm=farmDao.getFarmById(crop.getFarmId());
		FarmCropReport fcrepo=new FarmCropReport(farm,crop,cropInputs,cropExpense,totalValue);
		return fcrepo;
	}
}

