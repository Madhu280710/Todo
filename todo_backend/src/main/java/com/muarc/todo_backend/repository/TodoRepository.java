package com.muarc.todo_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.muarc.todo_backend.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}

