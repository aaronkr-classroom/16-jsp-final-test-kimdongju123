<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    if (session.getAttribute("username") == null) {
        response.sendRedirect("login.jsp"); // 로그인 페이지로 리다이렉트
    }
%>
<h2>Welcome, <%= session.getAttribute("username") %>!</h2>
<p>이 페이지는 로그인된 사용자만 접근할 수 있습니다.</p>
