package com.ensolvers.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ensolvers.back.entity.*;
import com.ensolvers.back.repository.*;


@Service
public class FoldService{

  @Autowired
	private FoldRepository foldRepository;

  public List<Fold> findAll() {
		return foldRepository.findAll();
	}

  public Fold findOneById(Long id) {
		return foldRepository.findOneById(id);
	}

  public Fold save(Fold fold) {
		return foldRepository.save(fold);
	}
	
  public void delete(Long id) {
		foldRepository.delete(id);
	}

}