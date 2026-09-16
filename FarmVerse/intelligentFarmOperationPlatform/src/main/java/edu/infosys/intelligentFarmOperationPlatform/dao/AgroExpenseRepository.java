package edu.infosys.intelligentFarmOperationPlatform.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.infosys.intelligentFarmOperationPlatform.bean.AgroExpense;

@Repository
public interface AgroExpenseRepository extends JpaRepository<AgroExpense, Integer> {

    @Query("SELECT MAX(expenseId) FROM AgroExpense")
    Integer getMaxAgroExpenseId();

}