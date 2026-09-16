package edu.infosys.intelligentFarmOperationPlatform.dao;

import java.util.List;

import edu.infosys.intelligentFarmOperationPlatform.bean.AgroExpense;

public interface AgroExpenseDao {

    public void addAgroExpense(AgroExpense agroExpense);

    public AgroExpense getAgroExpenseById(Integer id);

    public List<AgroExpense> getAllAgroExpenses();

    public void deleteAgroExpenseById(Integer id);

    public Integer getMaxAgroExpenseId();
}