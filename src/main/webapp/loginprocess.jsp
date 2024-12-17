<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    // 간단한 사용자 검증 (실제 프로젝트에서는 데이터베이스와 연동해야 함)
    if ("admin".equals(username) && "1234".equals(password)) {
%>
    <h2>로그인 성공!</h2>
    <p>환영합니다, <%= username %>님.</p>
<%
    } else {
%>
    <h2>로그인 실패</h2>
    <p>아이디 또는 비밀번호가 잘못되었습니다. 다시 시도해 주세요.</p>
<%
    }
%>
