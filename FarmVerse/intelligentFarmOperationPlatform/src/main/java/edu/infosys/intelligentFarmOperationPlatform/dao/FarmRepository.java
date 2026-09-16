package edu.infosys.intelligentFarmOperationPlatform.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.infosys.intelligentFarmOperationPlatform.bean.Farm;

public interface FarmRepository extends JpaRepository<Farm, Long>{
	
	@Query("Select max(farmId) from Farm")
	public Long getMaxFarmId();
	@Query("Select a from Farm a where a.username=?1")
	public List<Farm> getFarmsByUsername(String username);
	
}
