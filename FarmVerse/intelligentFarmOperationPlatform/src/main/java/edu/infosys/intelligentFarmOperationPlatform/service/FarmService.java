package edu.infosys.intelligentFarmOperationPlatform.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.infosys.intelligentFarmOperationPlatform.bean.Farm;
import edu.infosys.intelligentFarmOperationPlatform.dao.FarmDao;

@Service
public class FarmService {
	
	@Autowired
	private FarmDao farmDao;
	
	@Autowired
	private FarmUserService service;
	
	public Long generateFarmId() {
		Long value=farmDao.getMaxFarmId();
		 if(value==null)
			 value=10001L;
		 else
			 value=value+1;
		
		 return value;
	}
	
	private List<Farm> getAllFarmsByUser() {
		// TODO Auto-generated method stub
		String user = service.getUserId();
		return farmDao.getFarmsByUsername(user);
	}
	
	public List<Long> getAllFarmIdsByUser(){
		List<Farm> farmList=getAllFarmsByUser();
		List<Long> idList=new ArrayList<Long>();
		for(Farm farm:farmList) {
			idList.add(farm.getFarmId());
		}
		return idList;
	}

	
}
