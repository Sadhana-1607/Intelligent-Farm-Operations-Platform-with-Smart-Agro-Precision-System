package edu.infosys.intelligentFarmOperationPlatform.dao;

import java.util.List;

import edu.infosys.intelligentFarmOperationPlatform.bean.Farm;

public interface FarmDao {
	
	public void addFarm(Farm farm);
	public Farm getFarmById(Long id);
	public List<Farm> getFarmsByUsername(String username);
	public void deleteFarmById(Long id);
	public Long getMaxFarmId();
	
	
}
