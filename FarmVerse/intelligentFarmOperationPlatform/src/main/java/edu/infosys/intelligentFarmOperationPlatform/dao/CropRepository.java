package edu.infosys.intelligentFarmOperationPlatform.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.infosys.intelligentFarmOperationPlatform.bean.Crop;

public interface CropRepository extends JpaRepository<Crop, String> {

	
	@Query(value = "SELECT MAX(CAST(SUBSTRING(crop_id, 2) AS BIGINT)) FROM crop", nativeQuery = true)
	public Integer getMaxCropId();
	
	@Query("Select a from Crop a where a.username=?1")
	public List<Crop> getCropsByUsername(String username);
	
	@Query("SELECT c FROM Crop c WHERE c.farmId = ?1")
	public List<Crop> getCropsByFarmId(Long farmId);
	
}
