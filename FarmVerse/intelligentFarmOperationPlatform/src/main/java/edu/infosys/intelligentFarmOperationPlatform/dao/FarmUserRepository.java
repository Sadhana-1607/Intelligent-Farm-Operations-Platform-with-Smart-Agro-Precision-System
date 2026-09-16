package edu.infosys.intelligentFarmOperationPlatform.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.infosys.intelligentFarmOperationPlatform.bean.FarmUser;

import java.util.List;

public interface FarmUserRepository extends JpaRepository<FarmUser, String > {
	
	
	
}
