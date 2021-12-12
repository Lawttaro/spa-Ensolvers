package com.ensolvers.back.repository;


import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Repository;

import com.ensolvers.back.entity.*;

@Repository
public class FoldRepository {

	private AtomicInteger idCounter = new AtomicInteger();
	private HashMap<Long,Fold> folds = new HashMap();
	
  public List<Fold> findAll() {
		return new ArrayList<Fold>(folds.values());
	}

  public Fold findOneById(Long id) {
		return folds.get(id);
	}
	
	public Fold save(Fold fold) {
		fold.setId(idCounter.longValue());
		folds.put(idCounter.longValue(), fold);
		idCounter.incrementAndGet();
		return fold;
	}

  public void delete(Long id) {
		folds.remove(id);
	}
}