package edu.infosys.intelligentFarmOperationPlatform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.infosys.intelligentFarmOperationPlatform.dao.AgroExpenseDao;

@Service
public class AgroExpenseService {

    @Autowired
    private AgroExpenseDao agroExpenseDao;

    public Integer generateAgroExpenseId() {

        Integer value = agroExpenseDao.getMaxAgroExpenseId();

        if (value == null) {
            value = 1001;
        } else {
            value = value + 1;
        }

        return value;
    }
}