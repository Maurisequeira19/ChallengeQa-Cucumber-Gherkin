Feature: Challenge QA Automation

  Scenario: Suma de productos en carrito de compras
    Given Abrir el navegador
    When Ingresando codigo postal
    When Agregando al carrito el primer producto
    When Agregando al carrito el segundo producto
    Then Verificando total en carrito de compras